#define WINVER 0x0501
#undef UNICODE
#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <winsock2.h>
#include <ws2tcpip.h>
#include <stdlib.h>
#include <stdio.h>

#pragma comment (lib, "Ws2_32.lib")
// #pragma comment (lib, "Mswsock.lib")
#define DEFAULT_BUFLEN 512
#define DEFAULT_PORT "27015"

int __cdecl main(void) {
	WSADATA wsaData;
	int iResult;
	SOCKET ListenSocket = INVALID_SOCKET;
	SOCKET ClientSocket = INVALID_SOCKET;
	struct addrinfo *result = NULL;
	struct addrinfo hints;
	int iSendResult;
	char recvbuf[DEFAULT_BUFLEN];
	int recvbuflen = DEFAULT_BUFLEN;
	
	char * buf = recvbuf;
	char newLine[] = "\n";
	
	iResult = WSAStartup(MAKEWORD(2,2), &wsaData);
	ZeroMemory(&hints, sizeof(hints));
	hints.ai_family = AF_INET;
	hints.ai_socktype = SOCK_STREAM;
	hints.ai_protocol = IPPROTO_TCP;
	hints.ai_flags = AI_PASSIVE;
	iResult = getaddrinfo(NULL, DEFAULT_PORT, &hints, &result);
	ListenSocket = socket(result->ai_family, result->ai_socktype, result->ai_protocol);
	iResult = bind( ListenSocket, result->ai_addr, (int)result->ai_addrlen);
	freeaddrinfo(result);
	iResult = listen(ListenSocket, SOMAXCONN);
	ClientSocket = accept(ListenSocket, NULL, NULL);
	closesocket(ListenSocket);
	
	printf("Listening...\n");
	do {
		
		iResult = recv(ClientSocket, recvbuf, recvbuflen, 0);
		if (iResult > 0) {
			
			buf[strlen(buf)-2] = 0;
			
			printf("Received: %s\n", recvbuf, iResult);
			
			strcat(newLine, recvbuf);
		
		iSendResult = send( ClientSocket, recvbuf, iResult, 0 );
		printf("Sent: %s\n\n", recvbuf, iSendResult);
		} else if (iResult == 0) {
		printf("Connection closing...\n");
		} else {
		printf("recv failed with error: %d\n", WSAGetLastError());
		closesocket(ClientSocket);
		WSACleanup();
		return 1;
		}
		
    } while (iResult > 0);
		
    iResult = shutdown(ClientSocket, SD_SEND);
    closesocket(ClientSocket);
    WSACleanup();
    return 0;
		}
				