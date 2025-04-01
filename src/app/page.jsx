import { revalidateTime } from 'utils/config'
import getContent from 'utils/requests'
import generateSEO from 'utils/generate-seo'

import BlockManager from 'components/block-manager'

export const revalidate = revalidateTime

export async function generateMetadata() {
	const { seo } = (await getContent(
		'index',
		'populate[seo][populate][metaImage][fields][0]=url'
	)) || { seo: null }

	
	if (seo) return generateSEO(seo)
	return null
}

export default async function HomePage() {
	const { blocks } = (await getContent(
		'index',
		'populate[blocks][on][blocks.hero][populate][images][fields][0]=url&populate[blocks][on][blocks.hero][populate]=buttons&populate[blocks][on][blocks.openings][populate][items]=*&populate[blocks][on][blocks.openings][populate][image][fields][0]=url&populate[blocks][on][blocks.action][populate]=button&populate[blocks][on][blocks.form][populate][image][fields][0]=url&populate[blocks][on][blocks.video][populate][video][fields][0]=url&populate[blocks][on][blocks.video][populate][poster][fields][0]=url&populate[blocks][on][blocks.story][populate][image][fields][0]=url&populate[blocks][on][blocks.story][populate]=button&populate[blocks][on][blocks.story][populate][items][populate][service][fields][0]=slug&populate[blocks][on][blocks.services][populate][services][fields][0]=slug&populate[blocks][on][blocks.services][populate][services][fields][1]=name&populate[blocks][on][blocks.services][populate][services][populate][image][fields][0]=url&populate[blocks][on][blocks.map][populate]=*&populate[blocks][on][blocks.contacts]=*'
	)) || { blocks: [] }

	if (!blocks || !Array.isArray(blocks)) return null

	return <BlockManager blocks={blocks} />
}