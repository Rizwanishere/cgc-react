function Skills(){
    const skills= ['Java','JavaScript','Python','Rust'];
    return(<div>
        <h1 className='mb-4 mt-4 font-bold lg:text-4xl text-black'>Courses</h1>
        <ul>
            { skills.map(skill => <li>{skill}</li>) }
        </ul>
        <br/>
        </div>
    );
};
export default Skills;