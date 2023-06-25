import { signOut, useSession} from 'next-auth/react';
import styles from './accountpage.module.css'
import {AiOutlinePieChart,AiOutlineCalendar,AiOutlineSetting,AiOutlineLike,AiOutlineSearch, AiOutlineRight} from 'react-icons/ai'
import {BsFillTagsFill,BsCash,BsChevronDown} from 'react-icons/bs'
import  {BiUserCircle} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {GoDotFill} from 'react-icons/go'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


const data = [
    { month: 'Week 0', curve1: 400, curve2: 240 },
    { month: 'Week 1', curve1: 300, curve2: 456 },
    { month: 'Week 2', curve1: 500, curve2: 560 },
    { month: 'Week 3', curve1: 200, curve2: 370 },
    { month: 'Week 4', curve1: 700, curve2: 420 },
    { month: 'Week 5', curve1: 650, curve2: 500 }
  ];

  const pieData = [
    { name: 'Category 1', value: 550 },
    { name: 'Category 2', value: 310 },
    { name: 'Category 3', value: 140 },
  ];
  
  const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];
  
  

const User = () => {
    const {data:session} = useSession()
    const onClickSignOut = async () => {
        await signOut({redirect:false})
    }
    if (session){
        return(
            <div style={{backgroundColor:'#F5F5F5'}}>
                <div className={styles.accountContainer}>
                <div className={styles.boardMainContainer}>
                    <div className={styles.boardContainer}>
                        <h1 className={styles.boardContainerHeading}>Board.</h1>
                        <div className={styles.boardSubContainer}>
                            <div className={styles.boardSectionContainer}>
                                <div className={styles.boardSubSectionContainer}>
                                    <AiOutlinePieChart width={18} height={14} color="#ffffff" />
                                    <p className={styles.boardSectionPara}>Dashboard</p>
                                </div>
                                <div className={styles.boardSubSectionContainer}>
                                    <BsFillTagsFill width={18} height={14} color="#ffffff" />
                                    <p className={styles.boardSectionPara}>Transactions</p>
                                </div>
                                <div className={styles.boardSubSectionContainer}>
                                    <AiOutlineCalendar width={18} height={14} color="#ffffff" />
                                    <p className={styles.boardSectionPara}>Schedules</p>
                                </div>
                                <div className={styles.boardSubSectionContainer}>
                                    <BiUserCircle width={18} height={14} color="#ffffff" />
                                    <p className={styles.boardSectionPara}>Users</p>
                                </div>
                                <div className={styles.boardSubSectionContainer}>
                                    <AiOutlineSetting width={18} height={14} color="#ffffff" />
                                    <p className={styles.boardSectionPara}>Settings</p>
                                </div>
                            </div>
                            <div className={styles.boardBottomContainer}>
                                <p className={styles.boardBottomSectionPara}>Help</p>
                                <p className={styles.boardBottomSectionPara}>Contact Us</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.accountHeadingContainer}>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.headerContainerHeading}>Dashboard</h1>
                        <div className={styles.subHeaderContainer}>
                            <div className={styles.inputContainer}>
                                <input type="search" className={styles.inputField} placeholder="Search..."/>
                                <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                                    <AiOutlineSearch width={24} height={24} color="#858585" style={{paddingRight:'5px'}}/>
                                </div>
                            </div>
                            {session.user.name !== undefined && (
                                <img src={session.user.image} alt="user-image" style={{width:'30px',height:'30px',borderRadius:'50%',marginRight:'10px',marginLeft:'10px'}} />
                            )}
                            {session.user.name !== undefined && (
                                <button onClick={onClickSignOut} className={styles.signOutBtn}>Sign Out</button>
                            )}
                            {session.user.name === undefined && (
                                <button onClick={onClickSignOut} className={styles.signOutBtn}>Sign Out</button>
                            )}
                        </div>
                    </div>
                    <div className={styles.totalCountContainer}>
                        <div className={styles.totalCountCard} style={{backgroundColor:'#DDEFE0'}}>
                            <BsCash width={26} height={24} color="#000000" style={{alignSelf:'flex-end'}}/>
                            <p className={styles.totalCountCardPara}>Total Revenues</p>
                            <h1 className={styles.totalCountCardHeading}>$2,129,430</h1>
                        </div>
                        <div className={styles.totalCountCard} style={{backgroundColor:'#F4ECDD'}}>
                            <BsFillTagsFill width={26} height={24} color="#000000" style={{alignSelf:'flex-end'}}/>
                            <p className={styles.totalCountCardPara}>Total Transactions</p>
                            <h1 className={styles.totalCountCardHeading}>1,520</h1>
                        </div>
                        <div className={styles.totalCountCard} style={{backgroundColor:'#EFDADA'}}>
                            <AiOutlineLike width={26} height={24} color="#000000" style={{alignSelf:'flex-end'}}/>
                            <p className={styles.totalCountCardPara}>Total Likes</p>
                            <h1 className={styles.totalCountCardHeading}>9,721</h1>
                        </div>
                        <div className={styles.totalCountCard} style={{backgroundColor:'#DEE0EF'}}>
                            <FiUsers width={26} height={24} color="#000000" style={{alignSelf:'flex-end'}}/>
                            <p className={styles.totalCountCardPara}>Total Users</p>
                            <h1 className={styles.totalCountCardHeading}>892</h1>
                        </div>
                    </div>
                    <div className={styles.graphContainer}>
                        <div className={styles.graphSubContainer}>
                            <div className={styles.graphDetailsContainer}>
                                <h1 className={styles.graphDetailsHeading}>Activities</h1>
                                <p className={styles.graphDetailsPara}>May-June 2021 <BsChevronDown /></p>
                            </div>
                            <div className={styles.graphDetailsSubContainer}>
                                <div className={styles.graphLegendContainer}>
                                    <GoDotFill width={10} height={10} color="#E9A0A0"/>
                                    <p className={styles.graphLegendPara}>Guest</p>
                                </div>
                                <div className={styles.graphLegendContainer}>
                                    <GoDotFill width={10} height={10} color="#9BDD7C"/>
                                    <p className={styles.graphLegendPara}>User</p>
                                </div>
                            </div>
                        </div>
                        <ResponsiveContainer width="95%" height={250}>
                            <LineChart data={data}>
                                <CartesianGrid vertical={false} strokeDasharray="none"/>
                                <XAxis dataKey="month" tickLine={{ strokeWidth: 0 }} tick={(props) => {
                                    if (props.index === 0 || props.index === 5) {
                                    return null; // Hide the first tick
                                    }
                                    return (
                                    <text x={props.x} y={props.y} dy={16} textAnchor="middle">
                                        {props.payload.value}
                                    </text>
                                    );
                                }}/>
                                <YAxis axisLine={false} tickLine={{ strokeWidth: 0 }} />
                                <Line type="monotone" dataKey="curve1" stroke="#9BDD7C" strokeWidth={2} dot={null} />
                                <Line type="monotone" dataKey="curve2" stroke="#E9A0A0" strokeWidth={2} dot={null} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.pieContainer}>
                        <div className={styles.pieChartContainer}>
                            <div className={styles.pieChartDetailsContainer}>
                                <h1 className={styles.pieChartTopProductsHeading}>Top Products</h1>
                                <p className={styles.pieChartDetailsPara}>May-June 2021 <BsChevronDown /></p>
                            </div>
                            <div className={styles.pieChartSubContainer}>
                                <PieChart width={150} height={150}>
                                    <Pie
                                        data={pieData}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={75}
                                        fill="#8884d8"
                                    >
                                        {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                                <div>
                                    <div className={styles.pieChartLegendContainer}>
                                        <GoDotFill width={11} height={11} color="#98D89E"/>
                                        <div>
                                            <h1 className={styles.pieChartLegendHeading}>Basic Tees</h1>
                                            <p className={styles.pieChartLegendPara}>55%</p>
                                        </div>
                                    </div>
                                    <div className={styles.pieChartLegendContainer}>
                                        <GoDotFill width={11} height={11} color="#F6DC7D"/>
                                        <div>
                                            <h1 className={styles.pieChartLegendHeading}>Custom Short Pants</h1>
                                            <p className={styles.pieChartLegendPara}>31%</p>
                                        </div>
                                    </div>
                                    <div className={styles.pieChartLegendContainer}>
                                        <GoDotFill width={11} height={11} color="#EE8484"/>
                                        <div>
                                            <h1 className={styles.pieChartLegendHeading}>Super Hoodies</h1>
                                            <p className={styles.pieChartLegendPara}>14%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.scheduleContainer}>
                            <div className={styles.scheduleDetailsContainer}>
                                <h1 className={styles.scheduleTopProductsHeading}>Today's Schedule</h1>
                                <p className={styles.scheduleDetailsPara}>See All <AiOutlineRight /></p>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'80%'}}>
                                <div className={styles.scheduleDetailsSubContainer}>
                                    <h1 className={styles.scheduleDetailsHeading}>Meeting with suppliers from Kuta Bali</h1>
                                    <p className={styles.scheduleDetailsParagraph}>14.00-15.00</p>
                                    <p className={styles.scheduleDetailsParagraph}>at Sunset Road, Kuta, Bali</p>
                                </div>
                                <div className={styles.scheduleDetailsSubContainer1}>
                                    <h1 className={styles.scheduleDetailsHeading}>Check operation at Giga Factory 1</h1>
                                    <p className={styles.scheduleDetailsParagraph}>18.00-20.00</p>
                                    <p className={styles.scheduleDetailsParagraph}>at Central Jakarta </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default User