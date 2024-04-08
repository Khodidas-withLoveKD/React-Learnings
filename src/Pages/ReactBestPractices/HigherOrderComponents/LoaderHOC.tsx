interface IEnhancedLoader {
	line1: string
}

const LoaderHOC = () => {
	return <div>This is a loader</div>
}

const withLoaderHOC = (WapperComponent: any) => (
	<div>
		This is Enhanced Loader with below one as the original Loader
		<WapperComponent />
	</div>
)

const EnhancedLoader = withLoaderHOC(LoaderHOC)

export { EnhancedLoader, LoaderHOC }
