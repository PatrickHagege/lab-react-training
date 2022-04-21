const NumbersTable = ({ limit }) => {
    const createTable = (limit) => {
        let arr = [];
        let innerArr = [];
        for (let i = 1; i <= limit; i++) {
            if (i % 5 === 0 && i !== 0) {
                innerArr.push(i)
                arr.push(innerArr);
                innerArr = [];
            }   else    {
                innerArr.push(i);
            }
        }
        arr.push(innerArr);
        return arr;
    }
    const arr = createTable(limit);
    return(
        <table cellSpacing="0" cellPadding="0">
            <tbody>
            {arr.map((a, i) => {
                return (<tr key={i}>
                    {a.map((el, i) => {
                        return (
                            (el % 2 === 0 ?
                            (<td
                                style={{
                                    backgroundColor:'red',
                                    border:'1px solid black',
                                    padding:'1rem'
                                }}
                                key={i}
                            >
                                {el}
                            </td>)
                            :
                            (<td
                                style={{
                                    backgroundColor:'white',
                                    border:'1px solid black',
                                    padding:'1rem'
                                }}
                                    key={i}
                            >
                                {el}
                            </td>)
                            )
                            
                        )
                    })}
                </tr>)
                })}
            </tbody>
        </table>
    )
}

export default NumbersTable;