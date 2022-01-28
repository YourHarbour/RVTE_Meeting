import React from "react";
import '../../Articles.css';

const Process = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + ' - ' + mm + ' - ' + dd;
    return (
        <div>
            <article className={'welcome_broadcast'}>
                <h1>
                <span style={{"color":'#273372',fontStyle:'italic'}}>
                    RISC-V技术及生态研讨会(RVTE)&nbsp;
                </span>
                    -
                    <span style={{'color':'#f5b21b'}}>
                    &nbsp;会议议程
                </span>
                </h1>
            </article>
            <div className={'process-table'} >
                <p style={{textAlign:'right'}}>今天日期: {today}</p>
                <table border={1} style={{ width:'100%' }}>
                    <col width={'33%'}/><col width={'33%'}/><col width={'33%'}/>
                    <tr>
                        <td className={'date'} colSpan={3}>第一天 2022 - 01 - 01</td>
                    </tr>
                    <tr>
                        <td>
                            12:00 - 13:00
                        </td>
                        <td colSpan={2}>
                            Event A
                        </td>
                    </tr>
                    <tr>
                        <td>
                            13:00 - 14:00
                        </td>
                        <td colSpan={2}>
                            Event B
                        </td>
                    </tr>
                    <tr>
                        <td>
                            14:00 - 15:00
                        </td>
                        <td colSpan={2}>
                            Event C
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15:00 - 16:00
                        </td>
                        <td colSpan={2}>
                            Event D
                        </td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default Process;