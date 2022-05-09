import React from "react";
import './Layout.scss';
import { Layout as AntdLayout } from "antd";
import { PropTypesWithChildren } from "../types";

export default class Layout extends React.Component<PropTypesWithChildren> {
  render() {
    return (
      <AntdLayout className="layout">
        <AntdLayout.Header className="header">Header</AntdLayout.Header>
        <AntdLayout className="layout">
          <AntdLayout.Sider className="sider">Sider</AntdLayout.Sider>
          <AntdLayout.Content className="content">
            {this.props.children}
          </AntdLayout.Content>
        </AntdLayout>
      </AntdLayout>
    );
  }
}
