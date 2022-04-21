const CountryButton = ({ country, changeBackground, setSelected }) => {

    return(
        <input
        type="button"
        value={country}
        onClick={(e)=>{
            setSelected(e.target.value)
            changeBackground()
        }}
        />
          
    )

}

export default CountryButton;