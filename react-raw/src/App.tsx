import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCallback, useEffect, useState } from 'react';
import { search, SearchResult } from './search';

const PAGE_SIZE = 10;

function App() {
	const [results, setResults] = useState<SearchResult[]>([]);
	const [query, setQuery] = useState<string>('');
	const [page, setPage] = useState<number>(0);
	const maxPage = Math.floor(results.length / PAGE_SIZE);

	const setResultsFromQuery = useCallback((query?: string) => {
			setResults([]);
			setPage(0);
			if (query) {
				search(query).then(setResults);
			}
		}, [],
	);

	const getQueryFromParams = useCallback((): string => {
			const params = new URLSearchParams(document.location.search);
			return params.get('query') ?? '';
		},
		[],
	);

	useEffect(() => {
			const queryFromParams = getQueryFromParams();
			setQuery(queryFromParams);
			setResultsFromQuery(queryFromParams);
		}, [getQueryFromParams, setResultsFromQuery],
	);

	window.onpopstate = async () => {
		const queryFromParams = getQueryFromParams();
		setQuery(queryFromParams);
		setResultsFromQuery(queryFromParams);
	};

	const handleSearch = async () => {
		setResultsFromQuery(query);
		window.history.pushState(null, '', `?${new URLSearchParams({ query })}`);
	};

	return (
		<Box component={Paper} p={2} display='flex' flexDirection='column' width='40vw' margin='4vh auto 0'>
			<Box display='flex' gap={3} mb={2}>
				<TextField
					variant='outlined'
					fullWidth
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
				/>
				<Button
					variant='contained'
					startIcon={<SearchIcon />}
					sx={{ px: 3 }}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<List dense>
				{results.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE).map(({ title, url }) => {
					return (
						<ListItem key={url}>
							<ListItemText primary={title} secondary={url} />
						</ListItem>
					);
				})}
			</List>
			<Box display='flex' justifyContent='space-between'>
				<IconButton disabled={page === 0} onClick={() => setPage(page - 1)}>
					<ChevronLeftIcon />
				</IconButton>
				<IconButton disabled={page === maxPage} onClick={() => setPage(page + 1)}>
					<ChevronRightIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default App;
