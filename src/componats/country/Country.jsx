import './country.css'

const Country = ({country}) => {
    console.log(country)
    const {name, flags, population
    } = country
    return (
        <div className='country'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population
            }</p>
        </div>
    );
};

export default Country;