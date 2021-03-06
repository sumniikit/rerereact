import { useState, useEffect } from "react";
import {Table} from 'antd';
import axios from "axios";
import { useDispatch } from "react-redux";
import { getMaskID } from "../Services/maskIDSlice";
import { getMaskContent } from "../Services/maskContentSlice";

const columns = [
    {
        title: 'ID',
        dataIndex: 'maskID',
    },
    {
        title: 'Маска',
        dataIndex: 'maskContent',
    },
];

const TblMasksWithRadBut = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData(){
            const response = await axios.get("http://localhost:51693/api/masks");
            setData(response.data);
        };

        getData();
      }, []);
    
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows[0].maskContent);
          dispatch(getMaskID(selectedRowKeys));
          dispatch(getMaskContent(selectedRows[0].maskContent));
        },
    }

    return (
        <div>
            <Table rowKey={'maskID'}
                rowSelection={{
                type: 'radio',
                ...rowSelection,
                }}
                columns={columns}
                dataSource={data} 
                />
        </div>
    );
};

export default TblMasksWithRadBut;