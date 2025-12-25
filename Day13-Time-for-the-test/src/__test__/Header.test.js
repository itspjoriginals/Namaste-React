import Header from '../components/Header';
import {render} from '@testing-library/react'
import {Provider} from 'react-redux';
import appStore from "../utils/appStore";
import { BrowserRouter } from 'react-router-dom'

it("Should render Header component with login button", () => {

    render(
        <BrowserRouter>
        <Provider store= {appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
})