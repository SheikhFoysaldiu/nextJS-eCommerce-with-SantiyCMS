import React from "react";
import { client } from "../lib/client.sanity.js";
import { Product, Footerbanner, Herobanner } from "../components";
const Home = ({ products, banners }) => {
	return (
		<>
			{/* Herobanner */}
			<Herobanner heroBanner={banners.length && banners[0]} />
			{/* Content */}
			<div className='products-heading'>
				<h2>Beset Selling Products</h2>
				<p>Speakers of many Variations</p>
			</div>
			<div className='products-container'>
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			{/* Footer */}
			<Footerbanner footerBanner={banners && banners[0]} />
		</>
	);
};
export const getServerSideProps = async () => {
	const prodcutQuery = '*[_type=="product"]';
	const products = await client.fetch(prodcutQuery);
	const bannerQuery = '*[_type=="banner"]';
	const banners = await client.fetch(bannerQuery);
	return {
		props: { products, banners },
	};
};
export default Home;
