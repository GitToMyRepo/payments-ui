import './AppTitle.css'

const AppTitle = (props) => {
    return (
        <div className='menu'>
            <table className='menu'>
                <tr>
                    <td className='appName'>{props.appName}</td>
                    <td className='function'>{props.find}</td>
                    <td className='function'>{props.create}</td>
                </tr>
            </table>
        </div>
    );
}

export default AppTitle;