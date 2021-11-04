// package: 
// file: humans.proto

import * as jspb from "google-protobuf";

export class Human extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAge(): number;
  setAge(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Human.AsObject;
  static toObject(includeInstance: boolean, msg: Human): Human.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Human, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Human;
  static deserializeBinaryFromReader(message: Human, reader: jspb.BinaryReader): Human;
}

export namespace Human {
  export type AsObject = {
    name: string,
    age: number,
  }
}

export class Humans extends jspb.Message {
  clearHumansList(): void;
  getHumansList(): Array<Human>;
  setHumansList(value: Array<Human>): void;
  addHumans(value?: Human, index?: number): Human;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Humans.AsObject;
  static toObject(includeInstance: boolean, msg: Humans): Humans.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Humans, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Humans;
  static deserializeBinaryFromReader(message: Humans, reader: jspb.BinaryReader): Humans;
}

export namespace Humans {
  export type AsObject = {
    humansList: Array<Human.AsObject>,
  }
}

