import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

const App = () => {
    const activeMenu = false;
    return (
        <div className="">
            <BrowserRouter>
                <div className="flex relative dark:bg-dark-main-bg">
                    <div className="right-4 bottom-4 fixed" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white bg-white" type="button" style={{ background: 'blue', borderRadius: '50%'}}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div>
                        { activeMenu ? (
                            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                                Sidebar
                            </div>
                        ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                Sidebar - w-0
                            </div>
                        )}
                    </div>
                    <div className={ `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2' }` }>
                        <div className="md:static fixed dark:bg-main-dark-bg bg-main-bg navbar w-full"></div>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element="Ecommerce" />
                            <Route path="/ecommerce" element="Ecommerce" />

                            <Route path="/orders" element="Orders" />
                            <Route path="/employees" element="Employees" />
                            <Route path="/customers" element="Customers" />

                            <Route path="/kanban" element="Kanban" />
                            <Route path="/editor" element="Editor" />
                            <Route path="/calendar" element="Calendar" />
                            <Route path="/color-picker" element="colorPicker" />

                            <Route path="/line" element="Line" />
                            <Route path="/pie" element="Pie" />
                            <Route path="/area" element="Area" />
                            <Route path="/bar" element="Bar" />
                            <Route path="/financial" element="Financial" />
                            <Route path="/color-mapping" element="ColorMapping" />
                            <Route path="/pyramid" element="Pyramid" />
                            <Route path="/stacked" element="Stacked" />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
