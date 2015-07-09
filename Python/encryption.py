import wave, struct

waveFile = wave.open('test_file.wav', 'r')

length = waveFile.getnframes()
