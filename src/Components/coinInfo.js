import axios from "axios";
import React, { Component } from "react";
import { coins } from "./getData";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table-next'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
const columns = [
    { dataField: 'name', text: 'Coin', sort: true, filter:textFilter() },
    { dataField: 'min_order_size', text: 'Min Order-Size', sort: true },
    { dataField: 'maker_fee', text: 'Maker Fee' },
    { dataField: 'taker_fee', text: 'Taker Fee' },
    { dataField: 'status', text: 'Status' },
]

export default class CoinInfo extends Component {


    constructor(props) {
        super(props)

        this.state = {
            coins: [],
            isLoading: false,
            isError: false,
            searchField: ''

        }
    }

    //Async functio to get requst API

    renderTableRows = () => {
        return (<div>
            <BootstrapTable  bootstrap4 keyField='name' columns={columns} data={this.state.coins} filter = {filterFactory()} />

        </div>

        )
        // })
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        const coinData = coins.results
        console.log(coinData)
        this.setState({
            coins: coinData,
            isLoading: false
        })
    }
    searchChange = (e) => {
        this.setState({
            searchField: e.target.value,
        })
    }





    render() {

        const { coins, isLoading, isError, searchField } = this.state

        if (isLoading) {
            return (
                <div><h1>Loading</h1></div>
            )
        }


        return coins.length > 0 ?

            (
                <div className="table-data">
                   
                    <table className="table">

                        {/* <thead>
                            <tr>
                                <th scope="col">Coin</th>
                                <th scope="col">Min Order-Size</th>
                                <th scope="col">Maker Fee</th>
                                <th scope="col">Taker Fee</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            {this.renderTableRows()}
                        </tbody>
                    </table>
                </div>


            ) : (
                <div><h1>No User</h1></div>

            )

    }
}
