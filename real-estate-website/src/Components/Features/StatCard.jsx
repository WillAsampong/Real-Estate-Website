import PropTypes from "prop-types"


const StatCard = ({ stat, text }) => {
  return (
    <div className="bg-grey10 p-5 rounded-md border border-grey20">
        <span className="text-4xl text-white font-bold">{stat}</span>
        <p className="text-grey50">{text}</p>
    </div>
  )
}

StatCard.propTypes = {
    stat: PropTypes.string,
    text: PropTypes.string
}

export default StatCard
