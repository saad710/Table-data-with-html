import React from 'react';

const MainTable = () => {
    return (
        <div>
            <h2>Form</h2>
            <div className="container-fluid mt-110">
                <div className="row">
                     <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <table border="1" class="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th scope="col" colSpan='1'>Sl</th>
                                        <th scope="col" colSpan='3'>Particulars</th>
                                        <th scope="col" colSpan='1'>Amount &#2547;</th>
                                        <th scope="col" colSpan='1'>Comment</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">05</th>
                                            <td colSpan='3'>Expenses for food, clothing and other essentials</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">06</th>
                                            <td colSpan='3'>Housing expense</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="3" scope="row">
                                            07
                                            </th>
                                            <td colSpan='3'>Auto and transportation expenses (07A+07B)</td>
                                            <td>90</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>07A</td>
                                            <td>Driver’s salary, fuel and maintenance</td>
                                            <td>75</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>07B</td>
                                            <td>Other transportation</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="5" scope="row">
                                            08
                                            </th>
                                            <td colSpan='3'>Household and utility expenses(08A+08B+08C+08D)</td>
                                            <td>90</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>08A</td>
                                            <td>Electricity</td>
                                            <td>75</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>08B</td>
                                            <td>Gas, water, sewer and garbage</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>08C</td>
                                            <td>Phone, internet, TV channels subscription</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>08D</td>
                                            <td>Home-support staff and other expenses</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">09</th>
                                            <td colSpan='3'>Children’s education expenses</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="5" scope="row">
                                            10
                                            </th>
                                            <td colSpan='3'>Special expenses (10A+10B+10C+10D)</td>
                                            <td>90</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>10A</td>
                                            <td>Festival, party, events</td>
                                            <td>75</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>10B</td>
                                            <td>Domestic and overseas tour, holiday, etc.</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>10C</td>
                                            <td>Philanthropy, etc.</td>
                                            <td>66</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td colSpan='2'>10D</td>
                                            <td>Other special expenses</td>
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td colSpan='3'>Any other expenses</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td colSpan='3'>Total expense relating to lifestyle
                        (05+06+07+08+09+10+11)</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="3" scope="row">
                                            13
                                            </th>
                                            <td colSpan='3'>Payment of tax, charges, etc. (13A+13B)</td>
                                            <td>90</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>13A</td>
                                            <td>Payment of tax at source</td>
                                            <td>75</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td colSpan='2'>13B</td>
                                            <td>Payment of tax, surcharge or other  amount</td>                         
                                            <td>79</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">14</th>
                                            <td colSpan='3'>Total amount of expense and tax (12+13)</td>
                                            <td>0</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                 </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainTable;