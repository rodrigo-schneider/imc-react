function Tabela() {

    return (
        <>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>IMC</th>
                            <th>Peso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Magreza</td>
                            <td>&lt;18,5</td>
                            <td>&lt;57,3 Kg</td>
                        </tr>
                        <tr>
                            <td>Normal</td>
                            <td>18,5 a 24,9</td>
                            <td>57,3 a 77,1 Kg</td>
                        </tr>
                        <tr>
                            <td>Sobrepeso</td>
                            <td>25 a 29,9</td>
                            <td>77,1 a 92,9 Kg</td>
                        </tr>
                        <tr>
                            <td>Obesidade</td>
                            <td>&gt;30</td>
                            <td>&gt;92,9 Kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tabela;
