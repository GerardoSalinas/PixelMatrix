package programLibraries;

import java.awt.image.BufferedImage;

import java.awt.image.DataBufferByte;
import java.io.File;
import java.time.LocalTime;

import javax.imageio.ImageIO;

import java.awt.image.Raster;

import jakarta.servlet.http.HttpServletRequest;

public class ImageMakerMonocrome {
	private String name;
	
	private String path;
	
	public String maker(HttpServletRequest req) {
		if (req.getParameter("pixels") != null){
			
			String pixels = req.getParameter("pixels");
			
			File myFile = new File("/home/gasallinas/Pictures/",String.format("pixelImage_%s_.bmp",ImageMakerMonocrome.getTime()));
			byte[] bytes = this.toBytes(pixels);
			BufferedImage bufferedImage = new BufferedImage(25,25,BufferedImage.TYPE_BYTE_GRAY);
			bufferedImage.setData(Raster.createRaster(bufferedImage.getSampleModel(), new DataBufferByte(bytes,bytes.length), null));
			
			this.setName(myFile.getName());
			this.setPath(myFile.getAbsolutePath());
			
			try {
				ImageIO.write(bufferedImage,"bmp",myFile);
				//return String.format("Se ha creado la imagen %s en la ruta %s", this.getName(),this.getPath());
				return String.format("{ \"name\": \"%s\", \"path\": \"%s\" } ",this.getName(),this.getPath());
			}catch(Exception e) {
				
			}
		}
		
				
		return null;
	}
	
	public byte[] toBytes(String pixels) {
		byte bytes[] = new byte[pixels.length()];
		for (int i = 0; i<pixels.length(); i++) {
			if (pixels.charAt(i) == '0') {
				bytes[i] = 0;
			}else {
				bytes[i] = (byte)255;
			}
		}
		
		return bytes;
	}
	
	public static String getTime() {
		LocalTime currentTime = LocalTime.now();
		
		return String.format("%d-%d-%d",currentTime.getHour(),currentTime.getMinute(), currentTime.getSecond());
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	
}