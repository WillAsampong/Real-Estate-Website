import PropTypes from "prop-types"
import TopRightArrow from "../SVGs/TopRightArrowSVG"

const ServiceLink = ({ Icon, title }) => {
  return (
    <div className="relative flex-1 bg-grey10 px-6 py-4 border border-grey40 rounded-md">
          <div className="absolute right-4 top-2">
            <TopRightArrow className=""/>
          </div>
          <div className="icon mb-4 mx-auto">
            <Icon />
          </div>
          <p className="text-white font-semibold text-center">{title}</p>
        </div>
  )
}

ServiceLink.propTypes = {
    Icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}

export default ServiceLink
