import './SearchResult.css'

const SearchResult = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>101</td>
                    <td>2017-01-31</td>
                    <td>USA</td>
                    <td>USD</td>
                    <td>160</td>
                </tr>
                <tr>
                    <td>102</td>
                    <td>2017-02-01</td>
                    <td>FRA</td>
                    <td>EUR</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>103</td>
                    <td>2017-02-01</td>
                    <td>SWE</td>
                    <td>EUR</td>
                    <td>-100</td>
                </tr>
                <tr>
                    <td>104</td>
                    <td>2017-02-02</td>
                    <td>USA</td>
                    <td>USD</td>
                    <td>60</td>
                </tr>
            </tbody>
        </table>
    );
}

export default SearchResult;