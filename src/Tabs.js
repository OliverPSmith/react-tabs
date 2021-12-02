import { useState } from "react";
import "./App.css";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (

        <div className="container">

            <div className="tab-blocs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}>
                Tab 1
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>
                Tab 2
                </button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}>
                Tab 3
                </button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content content-active" : "content"}>
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Click on each tab to view the information contained in selected tabs content section. <br/>
                        Made using the React framework.
                    </p>
                </div>
                <div className={toggleState === 2 ? "content content-active" : "content"}>
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Reprehenderit tempor anim aliquip amet eiusmod 
                        aliquip veniam aute aute. Consequat Lorem consectetur 
                        ut pariatur quis amet. Esse et exercitation occaecat 
                        consectetur eu ipsum excepteur exercitation ex. Consequat 
                        elit quis dolore voluptate adipisicing cillum minim enim commodo ut.
                    </p>
                </div>
                <div className={toggleState === 3 ? "content content-active" : "content"}>
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Fugiat laborum voluptate cupidatat sunt dolor. Est anim labore tempor consequat proident 
                        sint fugiat cillum cillum minim. Excepteur et cillum culpa non anim deserunt ea culpa do 
                        velit minim commodo. Reprehenderit ipsum labore qui elit laborum anim. Magna dolore eiusmod 
                        sunt velit nulla occaecat eu eiusmod ad anim nostrud nisi. Cillum consequat anim id sit do 
                        magna et adipisicing. Et proident irure dolor fugiat esse adipisicing dolor enim consequat culpa.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Tabs;
