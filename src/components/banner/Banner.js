import { Menu } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

const category = [
    {
        name:'主页',
        url:'RVTE_Meeting'
    },
    {
        name:'征稿',
        url:'call_for_paper'
    },
    {
        name:'议程',
        url:'process'
    },
    // {
    //     name:'组委会',
    //     url:'committee'
    // },
    {
        name:'会场',
        url:'places'
    }
]

const Banner = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Menu id={'banner'} mode="horizontal" defaultSelectedKeys={['主页']} style={{paddingLeft:'5%'}}>
                <Menu.Item onClick={() => {navigate('/RVTE_Meeting')}}>
                    <div style={{"fontSize":'large',"color":'#273372' }}>
                        RISC-V技术及生态研讨会 <span style={{fontStyle:'italic', fontSize:'small',"color":'#f5b21b' }}>RVTE</span>
                    </div>
                </Menu.Item>
                {category.map((category) => {
                    const name = category.name;
                    const url = category.url;
                    return <Menu.Item key={name} onClick={() => {navigate(url)}}>{name}</Menu.Item>;
                })}
            </Menu>
        </div>
    )
}

export default Banner;