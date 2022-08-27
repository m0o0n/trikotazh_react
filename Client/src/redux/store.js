import React from 'react';
import '../index.scss';
import { addProduct, upDateNewProductText } from './state';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = state => {
	root.render(
		<BrowserRouter>
			<App
				state={state}
				addProduct={addProduct}
				updateText={upDateNewProductText}
				newProductText={state.ProductPage.newProductText}
			/>
		</BrowserRouter>
	);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
