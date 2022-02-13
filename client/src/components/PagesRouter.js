import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const PagesRouter = observer(() =>
{
    const {users} = useContext(Context)
    const pageCount = Math.ceil(users.totalCount / users.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++)
    {
        pages.push(i + 1)
    }
    return (
        <Pagination className="m-md-2"  >
            {pages.map(page =>
                <Pagination.Item
                    key = {page}
                    active = {users.page === page}
                    onClick = {() => users.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default PagesRouter;