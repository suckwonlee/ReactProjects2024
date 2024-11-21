import React, { useState } from "react";

function NameRequestForm(props) {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [fruit, setfruit] = useState("수박");

    const [file, setfile] = useState("");

    const handleChange = (event) => {
        const {target} = event;
        switch (target.id) {
            case "name":
                setName(event.target.value.toUpperCase());
                break
            case "details":
                setDetails(event.target.value);
                break
            case "fruit":
                setfruit(event.target.value);
                break
            case "file":
                setfile(event.target.value);
                break
        }
    }

    const handleSubmit = (event) => {
        alert(
            `입력한 이름: ${name}\n상세한 내용: ${details}\n선택한 과일: ${fruit}\n선택한 파일: ${file}`
        );
        event.preventDefault();
    };


    return (
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <label htmlFor="name">
                성명:
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
            </label><br/><br/>
            <label htmlFor="details">
                요청사항:
                <textarea
                    id="details"
                    value={details}
                    onChange={handleChange}
                />
            </label><br/><br/>
            <label>
                좋아하는 과일선택:
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>사과</option>
                    <option>포도</option>
                    <option>바나나</option>
                    <option>수박</option>
                    <option>복숭아</option>
                </select>
            </label><br/><br/>
            <label>
                파일 선택:
                <input id="file" type="file" onChange={handleChange}/>
            </label><br/><br/>
            <button type="submit">제출</button>
        </form>
    );
}

    export default NameRequestForm;
