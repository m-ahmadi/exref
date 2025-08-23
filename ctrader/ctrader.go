/*
# how to run this file

# 1. create scaffolding
mkdir myproject
cd myproject
mkdir openapi
copy .\ctrader.go myproject\main.go

# 2. install protobuf compiler
apt install -y protobuf-compiler # or windows.exe

# 3. install protobuf compiler go extension
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
protoc-gen-go --help

# 4. get .proto files
git clone git@github.com:spotware/openapi-proto-messages.git

# 5. compile .proto files
protoc --proto_path=./openapi-proto-messages --go_out=./openapi --go_opt=paths=source_relative ^
OpenApiMessages.proto ^
OpenApiModelMessages.proto ^
OpenApiCommonMessages.proto ^
OpenApiCommonModelMessages.proto

# 6. init go module and run
go mod init myproject
go get github.com/golang/protobuf/proto@v1.5.4
go mod tidy
go run main.go
*/

package main

import (
	"crypto/tls"
	"encoding/binary"
	"fmt"
	"myproject/openapi"
	"net"
	"time"

	// "google.golang.org/protobuf/proto"
	"github.com/golang/protobuf/proto"
)

func main() {
	var HOST string = "live.ctraderapi.com"
	var PORT uint32 = 5035
	var CLIENT_ID string = ""
	var CLIENT_SECRET string = ""

	addr := fmt.Sprintf("%s:%d", HOST, PORT)
	tcpAddr, _ := net.ResolveTCPAddr("tcp", addr)
	iconn, _ := net.DialTCP("tcp", nil, tcpAddr)

	cfg := tls.Config{
		InsecureSkipVerify: true,
	}
	conn := tls.Client(iconn, &cfg)

	req := &openapi.ProtoOAApplicationAuthReq{
		PayloadType:  nil,
		ClientId:     &CLIENT_ID,
		ClientSecret: &CLIENT_SECRET,
	}

	out, _ := proto.Marshal(req)

	//add
	msg := openapi.ProtoMessage{
		Payload:     out,
		PayloadType: proto.Uint32(uint32(2100)),
	}

	data, _ := proto.Marshal(&msg)

	lentgh := make([]byte, 4)
	binary.BigEndian.PutUint32(lentgh, uint32(len(data)))
	//out = append(length, out...)

	// fmt.Print(lentgh)
	// fmt.Print(data)

	conn.Write(lentgh)
	conn.Write(data)

	for {
		head := make([]byte, 4)
		_, err := conn.Read(head)
		if err != nil {
			return
		}
		data = make([]byte, binary.BigEndian.Uint32(head))
		_, err = conn.Read(data)
		if err != nil {
			return
		}
		var res openapi.ProtoMessage
		err = proto.Unmarshal(data, &res)
		if err != nil {
			return
		}
		//buffer := make([]byte, 1024)
		//conn.Read(buffer)
		fmt.Println("Response:", &res)
		time.Sleep(time.Second)
	}
}
