import React, { Component } from 'react';
import TreeNode from './TreeNode';
import values from 'lodash/values';

const data = {
    '/root': {
        path: '/root',
        type: 'folder',
        isRoot: true,
        children: ['/root/CSTRC, /root/CSTSI']
    },
    '/root/CSTRC': {
        path: '/root/CSTRC',
        type: 'folder',
        children: ['/root/CSTRC/ementas']
    },
    '/root/CSTSI': {
        path: '/root/CSTSI',
        type: 'folder',
        children: ['/root/CSTRC/enenta.txt']
    },
    '/root/CSTRC/enenta.txt': {
        path: '/root/CSTRC/ementa.txt',
        type: 'file',
    },
    '/root/CSTRC/ementas': {
        path: '/root/CSTRC/ementas',
        type: 'folder',
        children: ['/root/CSTRC/ementas/antiga.txt, /root/CSTRC/ementas/nova.txt']
    },
    '/root/CSTRC/ementas/antiga.txt': {
        path: '/root/CSTRC/ementas/antiga.txt',
        type: 'file',
    },
    '/root/CSTRC/ementas/nova.txt': {
        path: '/root/CSTRC/ementas/nova.txt',
        type: 'file',
    }
}

export default class Tree extends Component{
    state = {
        nodes: data,
    };

    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(node => node.isRoot === true);
    }

    getChildNodes = (node) => {
        const { nodes } = this.state;
        if (!node.children) return [];
            return node.children.map(path => nodes[path]);
    }

    render() {
        const rootNodes = this.getRootNodes();
        return(
            <div>
                { rootNodes.map(node => (
                    <TreeNode
                        node={node}
                        getChildNodes={this.getChildNodes}
                    />
                ))}
            </div>
        )
    }
} 