// components that catch errors in their child tree

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}
		return this.props.children;
	}
}

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>