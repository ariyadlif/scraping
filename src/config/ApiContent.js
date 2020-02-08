import React, {Component} from "react";
import ContentKomponen from "./ContentKomponen";
import axios from "axios";

export default class ApiContent extends Component {
	state = {
		post: []
	}

	componentDidMount() {

		axios.get("http://localhost:8000/products")
		.then((result) => {
			console.log(result)
			this.setState({
				post: result.data.response

			})

		})
	}

	render() {

		return(
			<div>
				{
					// this.state.post.map(post => {

					// 	return <ContentKomponen key={post.id} nama_kursus={post.nama_kursus} total_durasi={post.total_durasi}
					// 	total_murid={post.total_murid} jumlah_video={post.jumlah_video} harga={post.harga}
					// 	image={post.image} diskon={post.diskon}/>
					// })

					this.state.post.map(post => {

						return <ContentKomponen key={post.id} title={post.title} slug={post.slug}
						desc={post.desc} categories={post.categories} price={post.price}
						image={post.image} diskon={post.diskon}/>
					})

				}
			</div>
		)
	}
}
