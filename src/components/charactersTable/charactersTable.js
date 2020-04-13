import React from 'react'
import {Table, Button} from 'antd'
import Confirm from '../UI/confirm/confirm'

const CharactersTable = ({data, characterDelete, characterFormChange}) => {
    const columns = [
        {
            title: 'Имя персонажа',
            dataIndex: 'character',
            sorter: (a, b) =>  b.character.localeCompare(a.character),
            sortDirections: ['descend', 'ascend'],
            showSorterTooltip: false
        },
        {
            title: 'Описание персонажа',
            dataIndex: 'description',
            sortDirections: ['descend', 'ascend'],
            sorter: (a, b) =>  b.description.localeCompare(a.description),
            width: '300px',
            showSorterTooltip: false
        },
        {
            title: 'Причина смерти',
            dataIndex: 'death',
            sorter: (a, b) =>  b.death.localeCompare(a.death),
            sortDirections: ['descend', 'ascend'],
            showSorterTooltip: false
        },
        {
            title: 'Кем убит',
            dataIndex: 'killer',
            sorter: (a, b) =>  b.killer.localeCompare(a.killer),
            sortDirections: ['descend', 'ascend'],
            showSorterTooltip: false
        },
        {
            title: 'Орудие убийства',
            dataIndex: 'gun',
            sorter: (a, b) =>  b.gun.localeCompare(a.gun),
            sortDirections: ['descend', 'ascend'],
            showSorterTooltip: false
        },
        {
            title: 'Действие',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button style={{ marginRight: 5 }} type="dashed" onClick={() => characterFormChange(record)}>Изменить</Button>
                    <Button type="dashed" onClick={() => Confirm(characterDelete, record.id)} >Удалить</Button>
                </span>
            ),
            width: '250px',
        }
    ]
    return <Table 
    columns={columns} 
    dataSource={data} 
    rowKey="id" 
    size='middle'
    pagination={{position: ['bottomCenter']}} />
}

export default CharactersTable