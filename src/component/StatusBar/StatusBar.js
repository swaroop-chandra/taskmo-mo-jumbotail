import "./StatusBar.css";
export default function StatusBar({o1,o2,o3,o4,o5}){
    return <>
    <div className="stat-container">
        <div>
        <div className={`${o1==="1"?"my-circle":"my-circle-gray"} myCol `}>1</div>
        
        </div>
        <div className="my-line"></div>
        <div>
        <div className={`${o2==="1"?"my-circle":"my-circle-gray"} myCol `}>2</div>
        
        </div>
        <div className="my-line"></div>
        <div>
        <div className={`${o3==="1"?"my-circle":"my-circle-gray"} myCol `}>3</div>
        
        </div>
        <div className="my-line"></div>
        <div>
        <div className={`${o4==="1"?"my-circle":"my-circle-gray"} myCol `}>4</div>
        
        </div>
        <div className="my-line"></div>
        <div>
        <div className={`${o5==="1"?"my-circle":"my-circle-gray"} myCol `}>5</div>
        
        </div>
        <div>
        
        </div>
        {/* <div className="my-line"></div>
        <div className="my-circle myCol">2</div>
        <div className="my-line"></div>
        <div className="my-circle myCol">3</div>
        <div className="my-line"></div>
        <div className="my-circle myCol">4</div> */}
    </div>
    
    
    </>
}