import { useEffect, useState } from "react"
import { tabs } from "./data";
import './styles.css';
import { API } from "../../utils/constants";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [dataList, setDataList] = useState([])
    const handleChangeActiveTab =(tab) => {
        setActiveTab(tab)
    }

        const gettingData = async()=> {
        try {
        const response = await fetch(`${API}/${activeTab}`);
        const data = await response.json();

        setDataList(data);
        } catch(e) {
            console.log(e)
        }

    }

    useEffect(() => {
        gettingData()
    }, [activeTab])








  return (
    <div>
        <div>
            {tabs.map((tab) => (
                <button 
                key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleChangeActiveTab(tab)}
                >{tab}</button>
            ))}
        </div>
        <div>
            {/* {dataList.map(({id, title, address: {street = ''} ={}})=> {
                return (
                    <div key={id} className="title">
                        <h4 >{title}</h4>
                        <p>{street}</p>
                    </div>
                )
            })} */}

            {dataList.map(({id, title, address})=> {
                return (
                    <div key={id} className="title">
                        <h4 >{title}</h4>
                        {address?.street && <p>{address.street}</p>}
                    </div>
                )
            })}


        </div>
        

    </div>
  )
}

export default Tabs