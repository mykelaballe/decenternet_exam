import React, {useState, useEffect} from 'react'
import {FlatList, NewsItem, ActivityIndicator} from '../components'
import {connect} from 'react-redux'
import Actions from '../store/actions'

const Scrn = ({getList, getMoreList, loading, loadingMore, news}) => {

    const [page, setPage] = useState(1)

    useEffect(() => {
        getList()
    },[])

    const handleLoadMore = () => {
        if(!loadingMore) {
            setPage(prevPage => {
                const nextPage = prevPage + 1
                getMoreList(nextPage)
                return nextPage
            })
        }
    }

    const handleRefresh = () => getList()

    const renderItem = ({item}) => <NewsItem data={item} />

    const renderFooter = () => loadingMore ? <ActivityIndicator /> : null

    return (
        <FlatList
            data={news}
            renderItem={renderItem}
            loading={loading}
            contentContainerStyle={{padding: 10}}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onRefresh={handleRefresh}
            refreshing={false}
        />
    )
}

const mapStateToProps = state => ({
    loading: state.news.attemptingGetList,
    loadingMore: state.news.attemptingGetMoreList,
    news: state.news.list
})

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(Actions.Creators.attemptGetNews()),
    getMoreList: page => dispatch(Actions.Creators.attemptGetMoreNews(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Scrn)