using System;
using System.Text;
using System.IO;
using System.IO.Compression;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "44891482026867833,20190810,0"; // khasapa
            string compressed = Program.Compress(str);
            Console.WriteLine(compressed);
            Console.ReadLine();
        }

        public static string Compress(string text)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(text);
            // for khasaba
            // "44891482026867833,20190810,0"
            // bytes:
            // [52, 52, 56, 57, 49, 52, 56, 50, 48, 50, 54, 56, 54, 55, 56, 51, 51, 44, 50, 48, 49, 57, 48, 56, 49, 48, 44, 48]
            // length: 28


            MemoryStream memoryStream1 = new MemoryStream(); // creates stream

            /* GZipStream(Stream, CompressionLevel, bool leaveOpen)
            CompressionMode
                Compress    1
                Decompress  0
            */
            using (GZipStream gzipStream = new GZipStream((Stream)memoryStream1, CompressionMode.Compress, true))
                // GZipStream.Write (byte[] array, int offset, int count);
                // array:    The buffer that contains the data to compress.
                // offset:   The byte offset in array from which the bytes will be read.
                // count:    The maximum number of bytes to write.
                gzipStream.Write(bytes, 0, bytes.Length); // Writes compressed bytes to the underlying GZip stream from the specified byte array.

            memoryStream1.Position = 0L; // sets the current position within the stream.

            byte[] buffer = new byte[memoryStream1.Length]; // new array of bytes. length = 48 

            memoryStream1.Read(buffer, 0, buffer.Length); // (writes to buffer) Read(Byte[], Int32 offset, Int32 count) Reads a block of bytes from the current stream and writes the data to a buffer.

            byte[] inArray = new byte[buffer.Length + 4]; // new array of bytes. length = 52

            // BlockCopy (   Array src,       int srcOffset,  Array dst,        int dstOffset,   int count)
            Buffer.BlockCopy((Array)buffer,   0,              (Array)inArray,   4,               buffer.Length); // copy from buffer to inArray (start from inArray[4], in other words: leave first four bytes untouched)

            var x = (Array)BitConverter.GetBytes(bytes.Length); // Returns the specified 32-bit signed integer value as an array of bytes. (so if bytes.length is 28 which is 00000000 00000000 00000000 00011100, it returns [28, 0, 0, 0])
            // BlockCopy (  src, srcOffset,  dst,              dstOffset,  count)
            Buffer.BlockCopy(x,  0,          (Array)inArray,   0,          4);// copy 4 bytes from x to inArray (sits on the inArray first four bytes)
            
            // these two BlockCopy calls: adds first four bytes of array to the end of it.


            string result = Convert.ToBase64String(inArray);
            return result;
        }
    }
}
