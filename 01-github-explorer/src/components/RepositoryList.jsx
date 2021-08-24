import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
	name: 'unform2',
	description: 'form in react',
	link: 'https://github.com/unform/unform'
}


export function RepositoryList() {
	const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/jhonathadev/repos')
      .then(reponse => response.json)
      .then(data => console.log(data))
  }, [repositories]);

	return(
		<section className="repository-list">
			<h1>Lista de repositório</h1>

			<ul>
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
				<RepositoryItem repository={repository} />
			</ul>
						
		</section>
	)
}