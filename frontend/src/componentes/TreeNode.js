import React from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight, } from 'react-icons/fa';
import last from 'lodash/last';


const getNodeLabel = (node) => last(node.path.split('/'));

const TreeNode = (props) => {
    const { node, getChildNodes, level } = props;

    return(
        <React.Fraagment>

            <div level={level} type={node.types}>
                <div>
                    { node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight />) }
                </div>

                <div marginRight={10}>
                    { node.type === 'file' && <FaFile /> }
                    { node.type === 'folder' && node.isOpen === true && <FaFolderOpen /> }
                    { node.type === 'folder' && !node.isOpen && <FaFolder /> }
                </div>

                <span role="button">
                    { getNodeLabel(node) }
                </span>
            </div>

            { node.isOpen && getChildNodes(node).map(childNode => (
                <TreeNode
                    {...props}
                    node={childNode}
                    level={level + 1}
                />
            ))}
        </React.Fraagment>
    );
}


export default TreeNode;