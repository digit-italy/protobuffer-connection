## To create serializers from proto files a tool, provided by Google for the supported languages, have to be installed. It could be downloaded from:
https://github.com/protocolbuffers/protobuf/releases

## To create typescript typings for the serializers, install ts-protoc-gen npm package globally
npm install -g ts-protoc-gen

## Then the command for creating the proto serializers with ts typings is:
protoc --js_out=import_style=commonjs,binary:. --ts_out="." humans.proto
