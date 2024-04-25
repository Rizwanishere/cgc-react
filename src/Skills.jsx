function Skills(){
    const skills= ['Java','JavaScript','Python','Rust'];
    return(<div>
        <h1>Courses</h1>
        <ul>
            { skills.map(skill => <li>{skill}</li>) }
        </ul>
        </div>
    );
};
export default Skills;