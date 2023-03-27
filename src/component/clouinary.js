import React, {useState} from 'react';

function clouinary(props) {
    const [image, setImage] = useState("")
    const hanlEiMAGE= ()=>{
        const form = new FormData()
        form.append("file", image)
        form.append("upload_preset", "purushothamaapp")
        form.append("cloaud_name", "df2rf5byk")

        fetch("https://api.cloudinary.com/v1_1/realtimechatapp/image/upload", {
            method:"post",
            body:form
        }).then((res)=>res.json())
        .then((url)=>{
            console.log(url)
        }).catch((e)=>{
            console.log(e)
        })

    }
    return (
        <div>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <button>upload Image</button>
        </div>
    );
}

export default clouinary;