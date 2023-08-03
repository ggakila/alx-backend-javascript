const buffer = new ArrayBuffer(16);
//16 byte buffer 

if(buffer.byteLength === 16){
    console.log("Yes, its 16 bytes")
} else {
    console.log("Oh, no it's the wrong size!")
}

const int32view = new Int32Array(buffer);

for(let i=0; i<int32view.length; i++){
    int32view[i] = i * 2;
    console.log(int32view[i])
}

//dataview gives access to the array buffer 

let dv1 = new DataView(buffer)
// The dataview here accesses entirity of the buffer
let dv2 = new DataView(buffer, 10, 3)
// The dataview here starts at slot 10 and gets 3 bytes 
//This view gives access only to the selected bytes i.e 10, 11, 12

dv1.setInt8(11, 42);
//put "42" in slot 11 of the buffer though view1
let num = dv2.getInt8(1) // gets 11th slot as per DataView accssed
console.log(num)
//This will give 42 because we set the 11th slot to be 42