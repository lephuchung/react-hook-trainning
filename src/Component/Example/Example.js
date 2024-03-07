import './Example.scss'
const Example = () => {
    let name = 'Lê Hưng';
    let number = 2003;
    let obj = {
        firstName: "Noris",
        lastName: "Nora"
    };
    let link = "https://www.facebook.com/le.phuchung.25040601";
    return (
        <div className="example-container">
            {/* {console.log('check obj: ', obj)} */}
            <h3>{name} - {number}</h3>
            <h4>{obj.firstName} {obj.lastName}</h4>
            {/* <p>{JSON.stringify(obj)}</p> */}
            <a href={link} className='example-link'>My facebook</a>
        </div>

    )

}
export default Example;