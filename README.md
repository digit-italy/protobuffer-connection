# To create serilizers from proto files we need tool called. Could be downloaded from url below
https://github.com/protocolbuffers/protobuf/releases

# If you want typescript typings for your serilizer to have nice intellisense you can also install ts-protoc-gen npm package globally
npm install -g ts-protoc-gen

# Finally the command for creating the proto serilizers with typings:
protoc --js_out=import_style=commonjs,binary:. --ts_out="." humans.proto