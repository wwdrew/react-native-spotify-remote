require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNSpotifyRemote"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = package['author']
  s.homepage     = package['repository']['url']
  s.platform     = :ios, "9.0"

  s.source       = { :git => package['repository']['url'], :branch => "xcframework", :submodules => true }
  s.source_files  = "ios/*.{h,m}"
  s.vendored_frameworks = "ios/external/SpotifySDK/SpotifyiOS.xcframework"

  s.dependency 'React-Core'
end