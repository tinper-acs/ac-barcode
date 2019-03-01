
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";
var DemoArray = [{"example":<Demo1 />,"title":" 条形码组件","code":"/**\n *\n * @title 条形码组件\n * @description 条形码组件\n *\n */\n\nimport React, { Component } from 'react';\nimport { FormControl } from 'tinper-bee';\nimport AcBarcode from '../../src/index';\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"9787121315169\"\n        }\n    }\n    handlerChange = (value) => {\n        this.setState({ value });\n    }\n    render() {\n        return (\n            <div className=\"demoPadding\">\n                <FormControl value={this.state.value} onChange={this.handlerChange} />\n                <AcBarcode\n                    value={this.state.value}\n                />\n            </div>\n        )\n    }\n}\n\n\n","desc":" 条形码组件"},{"example":<Demo2 />,"title":" 条形码组件","code":"/**\n *\n * @title 条形码组件\n * @description 可以输入参数查看效果\n *\n */\n\nimport React, { Component } from 'react';\nimport { Col, Row, FormControl, Select } from 'tinper-bee';\nimport AcBarcode from '../../src/index';\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"9787121315169\",\n            format: \"CODE128\",\n            renderer:\"svg\"\n        }\n    }\n\n    handlerChange = (value) => {\n        this.setState({ value });\n    }\n\n    handleChangeFormat = (value) => {\n        this.setState({\n            format : value\n        });\n    }\n    handleChangeRenderer = (value) => {\n        this.setState({\n            renderer : value\n        });\n    }\n\n    render() {\n        return (\n            <div className=\"demoPadding\">\n                <Row>\n                    <Col md={3} mdOffset={1}>\n                        <AcBarcode\n                            value={this.state.value}\n                            format={this.state.format}\n                            renderer={this.state.renderer}\n                        />\n                    </Col>\n                </Row>\n                <Row>\n                    <Col md={3}>\n                        <FormControl value={this.state.value} onChange={this.handlerChange} />\n                    </Col>\n                </Row>\n                <Row>\n                    <Col md={3} style={{ \"margin\": \"10px 0\" }}>\n                        <Select\n                            defaultValue=\"CODE128\"\n                            onChange={this.handleChangeFormat}\n                        >\n                            <Option value=\"CODE128\">CODE128 auto</Option>\n                            <Option value=\"CODE128A\">CODE128 A</Option>\n                            <Option value=\"CODE128B\">CODE128 B</Option>\n                            <Option value=\"CODE128C\">CODE128 C</Option>\n                            <Option value=\"EAN13\">EAN13</Option>\n                            <Option value=\"EAN8\">EAN8</Option>\n                            <Option value=\"UPC\">UPC</Option>\n                            <Option value=\"CODE39\">CODE39</Option>\n                            <Option value=\"ITF14\">ITF14</Option>\n                            <Option value=\"ITF\">ITF</Option>\n                            <Option value=\"MSI\">MSI</Option>\n                            <Option value=\"MSI10\">MSI10</Option>\n                            <Option value=\"MSI11\">MSI11</Option>\n                            <Option value=\"MSI1010\">MSI1010</Option>\n                            <Option value=\"MSI1110\">MSI1110</Option>\n                            <Option value=\"pharmacode\">Pharmacode</Option>\n                        </Select>\n                    </Col>\n                </Row>\n                <Row>\n                    <Col md={3} style={{ \"margin\": \"10px 0\" }}>\n                    <Select\n                            defaultValue=\"svg\"\n                            onChange={this.handleChangeRenderer}\n                        >\n                            <Option value=\"svg\">svg</Option>\n                            <Option value=\"canvas\">canvas</Option>\n                            <Option value=\"img\">img</Option>\n                        </Select>\n                    </Col>\n                </Row>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 可以输入参数查看效果"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

