import React from "react";
import '../../Articles.css';

const CallForPaper = () => {
    return (
        <div>
            <article class={'welcome_broadcast'}>
                <h1>
                    <span style={{"color":'#273372',fontStyle:'italic'}}>
                        RISC-V技术及生态研讨会(RVTE)&nbsp;
                    </span>
                    -
                    <span style={{'color':'#f5b21b'}}>
                        &nbsp;征稿
                    </span>
                </h1>
            </article>
            <article className={'introduce'}>
                <p style={{fontSize:'xx-large', paddingTop:'1%'}}>
                    一. 征文范围
                </p>
                <p>
                    会议接收中文投稿。录用论文将会集中发表在《计算机系统应用》国内核心期刊。会议诚邀从事计算机相关研究方向的同仁踊跃投稿。
                </p>
                <p>
                    征文主题如下，但不仅限于下列领域：
                </p>
                <ul>
                    <li>面向RISC-V的编译优化、模拟仿真、二进制翻译、性能剖析</li>
                    <li>面向RISC-V的自动化测试、辅助验证、形式化方法</li>
                    <li>面向RISC-V的操作系统内核、固件设计</li>
                    <li>基于RISC-V的安全加固技术、防护系统、自动代码修复系统、处理器安全评估</li>
                    <li>面向RISC-V的应用软件适配、系统建设和研究开发</li>
                    <li>其它RISC-V 相关的原创性研究、系统应用及生态建设</li>
                </ul>

                <p style={{fontSize:'xx-large', paddingTop:'1%'}}>
                    二. 投稿要求
                </p>
                <ol>
                    <li>
                        文章论点明确、语言简练、论据正确、插图务必清晰。来稿应附中英文摘要，关键词及英文题目，并附主要参考文献。
                    </li>
                    <li>
                        投稿论文未在正式出版物上发表过，也不在其它刊物或会议的审稿过程中，不存在一稿多投现象；保证投稿论文的合法性（无抄袭、剽窃、侵权等不良行为）。
                    </li>
                    <li>
                        使用<a href={'http://www.c-s-a.org.cn'}>《计算机系统应用》官网&#60;http://www.c-s-a.org.cn></a> 提供的模版和在线投稿系统进行投稿。投稿时请在“拟投栏目”下拉单中选择“RISC-V技术及生态专刊”。
                    </li>
                    <li>
                        其它事项请参阅《计算机系统应用》网站的投稿指南。
                    </li>
                    <li>
                        通过评审的论文作者，将被邀请到2022年RISC-V技术及生态研讨会上分享相应的研究成果。
                    </li>
                </ol>

                <p style={{fontSize:'xx-large', paddingTop:'1%'}}>
                    三、重要日期
                </p>
                <ul>
                    <li>
                        论文投稿截止日期：2022年3月31日
                    </li>
                    <li>
                        初审结果通知日期：2022年4月25日
                    </li>
                    <li>
                        终审结果通知日期：2022年5月10日
                    </li>
                    <li>
                        会议日期：2022年6月（具体日期和地点待后续通知）
                    </li>
                    <li>
                        出版日期：2022年第9期
                    </li>
                </ul>

                <p style={{fontSize:'xx-large', paddingTop:'1%'}}>
                    四、联系方式
                </p>
                <p>
                    期刊联系方式：祁老师
                    （010-62661041，微信csaWeChat）
                </p>
                <p style={{ paddingBottom:'1%'}}>
                    会务联系方式：<a href = "mailto:mingjie@iscas.ac.cn">邢明杰(mingjie@iscas.ac.cn)</a>
                </p>

            </article>
        </div>
    )
}

export default CallForPaper;