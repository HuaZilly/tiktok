import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {DefaultLayout} from '~/components/Layout';
import {publicRoutes} from '~/routes'
import {Fragment} from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {
                        publicRoutes?.map((route, index) => {
                            const Pages = route.component;
                            let Layout = route.layout ? route.layout : (
                                route.layout === null ? Fragment : DefaultLayout)
                            ;
                            return <Route key={index} path={route.path}
                                          element={
                                              <Layout>
                                                  <Pages />
                                              </Layout>
                                            } />
                        })
                    }
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
