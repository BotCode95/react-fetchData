import { useState, useEffect } from 'react'
import './App.css'
import { Item } from './types/Item'

const App = () => {
	const [data, setData] = useState<Item[]>()
	const urlData = 'https://mocki.io/v1/d1f16339-9aec-4696-b302-7fd0cb0db28b'
	useEffect(() => {
		getData()
	}, [data])

	const getData = async () => {
		fetch(urlData)
			.then((response) => response.json())
			.then((data) => setData(data))
	}

	if (!data?.length) {
		return <div className="App">Loading...</div>
	}
	return (
		<div className="App">
			<table>
				<thead>
					<tr style={{ textAlign: 'center', borderBottom: '2px solid white' }}>
						<td>First Name</td>
						<td>Last Name</td>
						<td>Email</td>
						<td>Gender</td>
					</tr>
				</thead>
				{data &&
					data.map((item: Item) => (
						<tbody key={item.id}>
							<tr>
								<td>{item.first_name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<td
									style={{
										color: item.gender.includes('F') ? 'tomato' : 'cyan',
									}}
								>
									{item.gender}
								</td>
							</tr>
						</tbody>
					))}
			</table>
		</div>
	)
}

export default App
