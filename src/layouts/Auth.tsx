import React from "react";
import { Outlet } from "react-router-dom";
import {Layout} from "antd";
import AppHeader from "../components/header";
import {Content, Footer, Header} from "antd/lib/layout/layout";

interface AuthProps {
  children?: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Layout className="flex flex-col h-screen justify-between">
        <div className="mx-auto h-[15%] w-full">
          <AppHeader/>
        </div>
        <Content className="h-[80%]">
          <div className="mx-auto h-100">
              {children}
              <Outlet />
          </div>
        </Content>
        <Footer className="h-[5%]">
          <footer className="text-center mt-4">
            <small className={`flex flex-row text-center`}>
              <p className="mx-auto">&copy; 2023 All rights reserved.</p>
            </small>
          </footer>
        </Footer>
      </Layout>
    </React.Fragment>
  );
};

export default Auth;
