import React from "react";
import '../../Articles.css';

const Home = () => {
    return (
        <div>
            <article class={'welcome_broadcast'}>
                <h1>
                    <span style={{"color":'#273372',fontStyle:'italic'}}>
                        RISC-V技术及生态研讨会(RVTE)&nbsp;
                    </span>
                    -
                    <span style={{'color':'#f5b21b'}}>
                        &nbsp;欢迎
                    </span>
                </h1>
            </article>
            <article className={'introduce'}>
                <div className={"banner"}>
                    <img className={"banner-image"} src={'https://crvf2019.github.io/collateral/banner1.jpg'} alt={''}/>
                </div>
                <p style={{fontSize:'x-large', paddingTop:'1%'}}>
                    <a href="https://riscv.org/">RISC-V</a> 指令集架构的开放性、模块化、高度可定制性的特点使得其成为体系结构和软件系统创新的理想实验平台。
                </p>
                <p style={{fontSize:'x-large', paddingTop:'1%'}}>
                    为了进一步推动国内RISC-V相关的技术发展和生态建设，促进学术交流，中国科学院软件研究所智能软件研究中心拟定于2022年6月份举办第二届RISC-V技术及生态研讨会(RVTE2022)。
                </p>
                <p style={{fontSize:'x-large', paddingTop:'1%'}}>
                    会议由中国科学院软件研究所主办，聚焦于RISC-V相关的原创性研究成果，包括软件技术、系统应用及生态建设等。
                </p>
            </article>

        </div>
    )
}

export default Home;