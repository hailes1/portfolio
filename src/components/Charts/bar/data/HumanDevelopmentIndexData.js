const rawData = [
  { group: 'Iceland', rawValue: 0.972 },
  { group: 'Norway', rawValue: 0.97 },
  { group: 'Switzerland', rawValue: 0.97 },
  { group: 'Denmark', rawValue: 0.962 },
  { group: 'Germany', rawValue: 0.959 },
  { group: 'Sweden', rawValue: 0.959 },
  { group: 'Australia', rawValue: 0.958 },
  { group: 'Netherlands', rawValue: 0.955 },
  { group: 'Belgium', rawValue: 0.951 },
  { group: 'Singapore', rawValue: 0.946 },
  { group: 'United Kingdom', rawValue: 0.946 },
  { group: 'United Arab Emirates', rawValue: 0.94 },
  { group: 'Canada', rawValue: 0.939 },
  { group: 'Liechtenstein', rawValue: 0.938 },
  { group: 'New Zealand', rawValue: 0.938 },
  { group: 'United States', rawValue: 0.938 },
  { group: 'Korea (Republic of)', rawValue: 0.937 },
  { group: 'Slovenia', rawValue: 0.931 },
]

const minValue = Math.min(...rawData.map((item) => item.rawValue))
const maxValue = Math.max(...rawData.map((item) => item.rawValue))
const range = maxValue - minValue

// Stretch a tight range to 0-100 to make visual differences clearer.
const normalizedData = rawData.map((item) => ({
  ...item,
  value: Number((((item.rawValue - minValue) / range) * 100).toFixed(1)),
}))

export default normalizedData
